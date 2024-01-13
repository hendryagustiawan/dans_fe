import React from "react";
import { Link } from "react-router-dom";

export default function ListJobs({ id, title, type, location, created, company }) {
  const formatTime = (date) => {
    const originalTime = new Date(date);

    const indonesiaTime = new Intl.DateTimeFormat("id-ID", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    }).format(originalTime);

    return indonesiaTime;
  };

  return (
    <div>
      <div className="container-md mb-4">
        <div className="form-check d-flex">
          <div className="flex-grow-1">
            <Link to={`/detail/${id}`} className="text-decoration-none">
              <h6 className="fw-semibold text-primary fs-5">{title}</h6>
            </Link>

            <p className="fw-normal">
              {company} - <span className="fw-semibold text-success">{type}</span>
            </p>
          </div>

          <div className="mx-auto">
            <h6 className="fw-medium">{location}</h6>
            <p className="fw-light">{formatTime(created)}</p>
          </div>
        </div>
        <div className="border-bottom border-primary"></div>
      </div>
    </div>
  );
}
