import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import PaddedCard from '../../../ResuableComponents/PaddedCard';
// import Pagination from '../../../ResuableComponents/Pagination';
// import PaddedCard from '../../../ResuableComponents/PaddedCard';
import SkeletonPaddedRow from '../../../ResuableComponents/SkeletonLoaders/SkeletonPaddedRow';

function UserResourcesContent() {
  const [loading, setLoading] = useState(true);
  // const [userEmail, setUserEmail] = useState('');
  // const [body, setBody] = useState('');
  // const [paginate, setPaginate] = useState({
  //   start: 0,
  //   end: 9,
  //   // all: 0,
  // });
  const [userResources, setUserResources] = useState([]);
  const [allResources, setAllResources] = useState('');
  const [skeleton, setSkeleton] = useState(
    <SkeletonPaddedRow />,
  );
  // const onNext = () => {
  //   setPaginate((prev) => ({
  //     start: prev.start + 9,
  //     end: prev.end + 9,
  //   }));
  // };
  // const onPrev = () => {
  //   setPaginate((prev) => ({
  //     start: prev.start - 9,
  //     end: prev.end - 9,
  //   }));
  // };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/users/current-user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elUsrT')}`,
      },
    }).then((response) => {
      // console.log(response);
      // setUserEmail(response.data.data.email);
      // userEmail = response.data.data.email;
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/users/get-user/${response.data.data.email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('elUsrT')}`,
        },
      }).then((res) => {
        setLoading(false);
        setSkeleton();
        setUserResources(
          res.data.data.resources,
        );
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
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/resources`).then((response) => {
      // console.log(response);
      setAllResources(response.data.data);
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
  }, []);
  // console.log({ userResources, allResources });
  return (
    <div>
      <ToastContainer />
      <div className="container py-5 my-lg-5">
        <div className="row">
          {loading
            ? skeleton
            : userResources.map((item) => allResources.filter(
              (filt) => filt.id === item,
            ).map(
              (resource) => (
                // console.log(resource)
                <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4" key={resource.id}>
                  <PaddedCard
                    title={resource.title}
                    image={resource.image}
                    button="Download"
                    brochure={resource.book}
                  />
                </div>
              ),
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserResourcesContent;
