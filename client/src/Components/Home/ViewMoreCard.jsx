import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ViewMoreCard({ subCategory }) {
  const navigate = useNavigate();

  return (
    <div
      className="border h-100 view-more-card"
      onClick={() => navigate(`/collections/${subCategory}`)}
    >
      <span className="">View More</span>
    </div>
  );
}
