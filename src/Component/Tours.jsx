import Card from "./Card";
// import Tours from "./Tours"
function Tours({tours,removeTour}) {
return (
<div className="container">
<div>
    <h2 className="title"> plan with Arun</h2>
</div>
<div className="cards">
{
    tours.map((tour)=>{
        return <Card {...tour} removeTour={removeTour}></Card>
    })
    // ... tour se tour vali copy bangyi hai
}
</div>
</div>
);
}
export default Tours;