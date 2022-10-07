import black from '../../assets/img/black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Review() {
    return (
        <div className="container-fluid h-2">
            <div className="m-5 p-4 d-flex justify-content-around">
                <div className="">
                    <img src={black} className="rounded-circle" />
                    <p className="text-center pt-1 mb-0">Jean</p>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </div>
                </div>
                <div className="">
                    <img src={black} className="rounded-circle" />
                    <p className="text-center pt-1 mb-0">Jean</p>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </div>
                </div>
                <div className="">
                    <img src={black} className="rounded-circle" />
                    <p className="text-center pt-1 mb-0">Jean</p>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </div>
                </div>
                <div className="">
                    <img src={black} className="rounded-circle" />
                    <p className="text-center pt-1 mb-0">Jean</p>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                        <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </div>
                </div>
            </div>
        </div>
    );
}