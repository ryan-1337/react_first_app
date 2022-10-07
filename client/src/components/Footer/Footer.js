export default function footer() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <div>
            <div className="d-flex justify-content-evenly">
                <ul className="flex-column text-center">
                <h4 className="fw-semibold">Navigation</h4>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
                <ul className="flex-column text-center">
                <h4 className="fw-semibold">Informations</h4>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
                <ul className="flex-column text-center">
                <h4 className="fw-semibold">Contact</h4>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
            <div className="mt-3">
                <p className="text-center">{date}</p>
            </div>
        </div>
    );
}