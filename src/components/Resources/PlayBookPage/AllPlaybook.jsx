import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Empty from '../../ResuableComponents/Empty';
// import Empty from '../../ResuableComponents/Empty';
import PaddedCard from '../../ResuableComponents/PaddedCard';
import Pagination from '../../ResuableComponents/Pagination';
import SkeletonPaddedRow from '../../ResuableComponents/SkeletonLoaders/SkeletonPaddedRow';
// import PaddedCard from '../../ResuableComponents/PaddedCard';
// import Pagination from '../../ResuableComponents/Pagination';

function AllPlaybook() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonPaddedRow />,
  );
  const [active, setActive] = useState({
    all: true,
    whitepaper: false,
    digital: false,
    industry: false,
    open: false,
  });
  const [paginate, setPaginate] = useState({
    start: 0,
    end: 9,
    // all: 0,
  });
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
  const [user, setUser] = useState();
  // let use;
  const getCurrentUser = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/users/current-user`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('elUsrT')}`,
          },
        },
      )
      .then((response) => {
        setUser(response.data.data);
      });
  };

  useEffect(() => {
    if (!user) {
      // eslint-disable-next-line no-use-before-define
      getCurrentUser();
    }
    // eslint-disable-next-line no-use-before-define
    all();
  }, [paginate, user]);

  const all = () => (
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/resources`).then((response) => {
      setLoading(false);
      setActive('All');
      setSkeleton(
        <SkeletonPaddedRow />,
      );
      // setBody(response);
      if (response.data.data.length === 0) {
        setBody(
          <Empty header="No Whitepaper" />,
        );
      } else {
        setBody(
          response.data.data.slice(paginate.start, paginate.end).map((item) => (
            (
              <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4" key={item.id}>
                <PaddedCard
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  brochure={item.book}
                  user={user?.email}
                  id={item.id}
                  button="Make payment"
                />
                {/* {console.log(user)} */}
              </div>
            )
          )),
          response.data.data.length > 9
            && (
            <div className="pt-4 px-5">
              <Pagination
                start={paginate.start}
                end={paginate.end}
                length={response.data.data.length}
                onPrev={onPrev}
                onNext={onNext}
              />
            </div>
            ),
        );
      }
    }, (error) => {
      if (error.response) {
        error.response.data.errors.map((err) => toast.error(`${err.message}`, {
          position: 'top-right',
          autoClose: 15000,
          hideProgressBar: true,
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
    })
  );

  const resourceTypes = ['Whitepaper', 'Digital', 'Industry Insights', 'Open source-data'];

  const categories = (type) => (
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/resources`).then((response) => {
      setLoading(false);
      setSkeleton(
        <SkeletonPaddedRow />,
      );
      setActive(type);
      // console.log(user?.email);
      const types = response.data.data.filter((item) => item.category === type);
      // console.log(types);
      if (types.length === 0) {
        setBody(
          <Empty header="No Playbook" subtext="There are no playbooks in this category yet." />,
        );
      } else {
        setBody(
          types.slice(paginate.start, paginate.end).map((item) => (
            (
              <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4" key={item.id}>
                <PaddedCard
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  brochure={item.book}
                  user={user?.email}
                  id={item.id}
                  button="Make payment"
                />
              </div>
            )
          )),
          types.length > 9
            && (
            <div className="pt-4 px-5">
              <Pagination
                start={paginate.start}
                end={paginate.end}
                length={types.length}
                onPrev={onPrev}
                onNext={onNext}
              />
            </div>
            ),
        );
      }
    }, (error) => {
      if (error.response) {
        error.response.data.errors.map((err) => toast.error(`${err.message}`, {
          position: 'top-right',
          autoClose: 15000,
          hideProgressBar: true,
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
    })
  );

  return (
    <div className="playbook">
      <div className="container pb-5">
        <div className="d-flex flex-wrap  justify-content-center pb-3 pb-lg-4 playbook__nav">
          <span
            role="button"
            tabIndex={0}
            className={active === 'All' ? 'btn button px-0 mx-2 mx-lg-3 playbook__nav--menu playbook__active' : 'btn button px-0 mx-2 mx-lg-3 playbook__nav--menu'}
            onClick={() => all()}
            aria-hidden="true"
          >
            All
          </span>
          {
            resourceTypes.map((item, index) => (
              <span
                role="button"
                tabIndex={0}
                className={active === item ? 'btn button px-0 mx-2 mx-lg-3 playbook__nav--menu playbook__active' : 'btn button px-0 mx-2 mx-lg-3 playbook__nav--menu'}
                onClick={() => categories(item)}
                aria-hidden="true"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                {item}
              </span>
            ))
          }
        </div>
        <div className="row pb-5">
          {loading ? skeleton : body}
        </div>
        {/* <div className="row">
          {body?.data?.data?.length > 9
              && (
              <div className="pt-4 px-5">
                <Pagination
                  start={paginate.start}
                  end={paginate.end}
                  length={body.data.data.length}
                  onPrev={onPrev}
                  onNext={onNext}
                />
              </div>
              )}
        </div> */}
      </div>
    </div>
  );
}

export default AllPlaybook;
