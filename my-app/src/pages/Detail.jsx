import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const [listJobs, setListJobs] = useState([]);
  const { id } = useParams();

  const getDetailJobs = () => {
    axios
      .get(`https://dev6.dansmultipro.com/api/recruitment/positions/${id}`)
      .then(({ data }) => {
        setListJobs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetailJobs();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="bg-white my-5">
        <div className="bg-muted container-lg border border-1 rounded ">
          <div className="my-4 container">
            <p className="fw-light">
              {listJobs.type}/ <span className="fw-light">{listJobs.location}</span>
            </p>
            <p className="fs-4 fw-bold">{listJobs.title}</p>
            <div className="border-bottom border-primary my-2"></div>
            <div className="mt-5">
              <div className="row align-items-start">
                <div className="col-9">{listJobs.description}</div>
                <div className="col-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={listJobs.company_logo} className="card-img-top" alt="..." />
                    <a className="card-text">{listJobs.company_url}</a>
                    <div className="card-body">
                      <h5 className="card-title">How to Apply</h5>
                      <p className="card-text">{listJobs.how_to_apply}</p>
                      <a href="#">{listJobs.url}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
