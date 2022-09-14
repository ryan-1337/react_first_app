export default function About() {
    return (
        <div className="container-fluid d-flex">
            <div className="m-5 p-4 flex-column w-50 ">
                <h3>Ou sommes nous ?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>
                <p>Porttitor lacus luctus accumsan tortor posuere ac ut
                    consequat semper.</p>
                <p>Auctor elit sed vulputate mi sit amet mauris</p>
            </div>
            <div className="w-50">
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d10469.291097032281!2d2.5629054374261035!3d49.00445220163391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e6158d1f6a62b1%3A0xc0847bc40deb1a9d!2ssheraton%20paris!3m2!1d49.0040082!2d2.5710045999999998!5e0!3m2!1sfr!2sfr!4v1662732966390!5m2!1sfr!2sfr" className="w-100 h-100" ></iframe>
            </div>
        </div>
    );
}