import Card from "@mui/material/Card";

function Blog() {
  //   fetch("", {
  //     headers: "Get",
  //   })
  //     .then((res) => {
  //       JSON.stringify(res);
  //     })
  //     .then((data) => {
  //       const newProducts = data;
  //       console.log(newProducts);
  //     });

  const data = [
    {
      customerID: 1,
      title: "Full stack developer",
      descrption: "learn fully",
    },
    {
      customerID: 2,
      title: "enjoy life",
      descrption: "do whatever u want",
    },
  ];

  return (
    <div>
      <main>
        {data.map((data) => {
          return (
            <ul>
              <Card>
                <li>{data.title}</li>
                <li>{data.customerID}</li>
                <li>{data.descrption}</li>
              </Card>
            </ul>
          );
        })}
      </main>
    </div>
  );
}

export default Blog;
