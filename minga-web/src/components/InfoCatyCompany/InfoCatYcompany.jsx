import React from 'react';
import './infocatycompany.css'
import { Link as Anchor } from 'react-router-dom'

export default function InfoCatYcompany({info}) {
  console.log(info)
  return (
      <div className="category-company">
        {info.category_id && <button className="shonen">{info.category_id.name}</button>}
        {info.author_id && (
          <Anchor to={"/profile"}>
            <h3 className="company">{info.author_id.name}</h3>
          </Anchor>
        )}
      </div>
  );
}

