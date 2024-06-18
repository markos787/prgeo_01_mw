import React from "react";
import MediaCard from "./Card";
import './Dashboard.css'

function Dashboard() {
  const input_list = [
    {
      name: "Andrew",
      surname: "Tate",
      content: "Top G",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },

    {
      name: "Marek",
      surname: "Weis",
      content: "Tylko G",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },

    {
      name: "Marek",
      surname: "Weis",
      content: "Tylko G",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },

    {
      name: "Marek",
      surname: "Weis",
      content: "Tylko G",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },

    {
      name: "Marek",
      surname: "Weis",
      content: "Tylko G",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },

    {
      name: "Marek",
      surname: "Weis",
      content: "Tylko G",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },

    {
      name: "Marek",
      surname: "Weis",
      content: "Tylko G",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },
  ];
  return (
    <div className="card-container">
      {input_list.map((item) => {
        return (
          <MediaCard
            name={item.name}
            surname={item.surname}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;
