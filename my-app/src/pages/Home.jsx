import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ListJobs from "../components/ListJobs";
import axios from "axios";

export default function Home() {
  const [listJobs, setListJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getListJobs = () => {
    axios
      .get(`https://dev6.dansmultipro.com/api/recruitment/positions.json?page=${currentPage}`)
      .then(({ data }) => {
        setListJobs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getListJobs();
  }, [currentPage]);

  return (
    <div>
      <Navbar />
      <div className="bg-white my-5">
        <form className="container mb-5 d-flex flex-row justify-content-between align-items-center">
          <div className="mb-3 col-4">
            <label for="exampleInputEmail1" className="form-label fw-semibold">
              Job Description
            </label>
            <input placeholder="filter by title, companies" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3 col-4">
            <label for="exampleInputPassword1" className="form-label fw-semibold">
              Location
            </label>
            <input placeholder="filter by city, zip, country" type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label fw-semibold" for="exampleCheck1">
              Full Time Only
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>

        <div className="bg-muted container-lg border border-1 rounded ">
          <div className="m-3">
            <p className="fs-3 my-4 fw-bold">Jobs List</p>

            <div>
              {listJobs?.map((el) => {
                if (el?.id && el?.title && el?.type && el?.location && el?.created_at && el?.company) {
                  return <ListJobs key={el.id} id={el.id} title={el.title} type={el.type} location={el.location} created={el.created_at} company={el.company} />;
                }
                return null;
              })}
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-end mt-3 container">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              {currentPage !== 1 && (
                <li className="page-item">
                  <button type="button" onClick={() => setCurrentPage(currentPage - 1)} className="page-link">
                    Previous
                  </button>
                </li>
              )}

              {Boolean(listJobs?.length) && (
                <li className="page-item">
                  <button type="button" className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
