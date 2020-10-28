import React from "react";

export const Card = () => {
  return (
    <article class="flip-card">
      <div class="inner">
        <div class="front">
          <img src="https://images.unsplash.com/photo-1562328877-aacc87986110?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3NTczOH0" />
        </div>
        <div class="back">
          <p>ducks on water</p>
        </div>
      </div>
    </article>
  );
};
