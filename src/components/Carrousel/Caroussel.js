export default function Carrousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://cache.marriott.com/marriottassets/marriott/SCLSI/sclsi-exterior-0398-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://cache.marriott.com/marriottassets/marriott/SCLSI/sclsi-bar-lounge-8199-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}