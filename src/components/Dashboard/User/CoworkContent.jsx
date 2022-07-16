import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import CoworkCard from '../../ResuableComponents/CoworkCard';
import Pagination from '../../ResuableComponents/Pagination';
import SkeletonEventRow from '../../ResuableComponents/SkeletonLoaders/SkeletonEventsRow';
import DashboardEmpty from '../Admin/DashboardReusable/DashboardEmpty';

function CoworkContent() {
  const [loading, setLoading] = useState(true);
  // const [userEmail, setUserEmail] = useState('');
  const [paginate, setPaginate] = useState({
    start: 0,
    end: 9,
    // all: 0,
  });
  const [body, setBody] = useState('');
  const [skeleton, setSkeleton] = useState(
    <SkeletonEventRow />,
  );
  const onNext = () => {
    setPaginate((prev) => ({
      start: prev.start + 9,
      end: prev.end + 9,
    }));
  };
  const onPrev = () => {
    setPaginate((prev) => ({
      start: prev.start - 9,
      end: prev.end - 9,
    }));
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/users/current-user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elUsrT')}`,
      },
    }).then((response) => {
      // console.log(response);
      // setUserEmail(response.data.data.email);
      // userEmail = response.data.data.email;
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/users/get-user/${response.data.data.email}`).then((res) => {
        setLoading(false);
        setSkeleton();
        if (res.data.data.bookings.length === 0) {
          setBody(
            <DashboardEmpty
              header="No Bookings Yet"
              subtext="You haven't made any bookings yet, proceed to see our available workspace plans."
              button="Book a workspace"
              path="/program/innovation-hub"
            />,
          );
        } else {
          setBody(
            <>
              {
            res.data.data.bookings.slice(paginate.start, paginate.end).map((item) => (
              <div className="col-md-6 col-lg-4 p-2 p-md-3 p-lg-4" key={item.id}>
                <CoworkCard
                  title={item.plan}
                  people={`${item.noOfPersons}`}
                  startDate={item.startDate}
                  expDate={item.expDate}
                  amount={item.amount}
                  payment={item.paymentStatus}
                  // date={`${item.startDate} --- ${item.expDate}`}
                  // button="See Details"
                  // image="/images/cowork/cowork1.png"
                  // path="/dashboard/user/cowork/:slug"
                />
              </div>
            ))
            }
              {
              res.data.data.bookings.length > 9
              && (
              <div className="pt-4 px-5">
                <Pagination
                  start={paginate.start}
                  end={paginate.end}
                  length={res.data.data.bookings.length}
                  onPrev={onPrev}
                  onNext={onNext}
                />
              </div>
              )
            }
              ,
            </>,
          );
        }
      }, (err) => {
        // console.log(err);
        if (err.response) {
          err.response.data.errors.map((er) => toast.error(`${er.message}`, {
            position: 'top-right',
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }));
        } else {
          toast.error('Ops, something went wrong, please try again', {
            position: 'top-right',
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    }, (error) => {
      // console.log(error);
      if (error.response) {
        error.response.data.errors.map((err) => toast.error(`${err.message}`, {
          position: 'top-right',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }));
      } else {
        toast.error('Ops, something went wrong, please try again', {
          position: 'top-right',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }, [paginate]);

  return (
    <div className="cowork__content py-5">
      <ToastContainer />
      <div className="container py-lg-5">
        <div className="row">
          {loading ? skeleton : body}
          {/* <Pagination /> */}
        </div>
      </div>
    </div>
  );
}

export default CoworkContent;
