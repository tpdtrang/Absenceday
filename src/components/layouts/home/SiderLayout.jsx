import React, {Component} from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class SiderLayout extends Component {
    render() {
        const contentLogin = () => {
            if (cookies.get("data") !== undefined) {
                return (
                    <div className="b-profile">
                        <img className="img-user" src="../../images/user.png" alt="user"/>
                        <div className="b-information">
                            <h1 className="b-title">Họ tên:</h1>
                            <span className="b-text">{cookies.get("data").attributes.name}</span>
                        </div>
                        <div className="b-information">
                            <h1 className="b-title">Tuổi:</h1>
                            <span className="b-text">13</span>
                        </div>
                        <div className="b-information">
                            <h1 className="b-title">Quê quán:</h1>
                            <span className="b-text">da nang</span>
                        </div>
                        <div className="b-information">
                            <h1 className="b-title">Vị trí:</h1>
                            <span className="b-text">Nhan vien</span>
                        </div>
                        <div className="b-information">
                            <h1 className="b-title">Khối:</h1>
                            <span className="b-text">Java</span>
                        </div>
                    </div>

                )
            }
        }
        return (

            <section className="b-siderbar-container">
                <div className="b-siderbar">
                    {contentLogin()}
                   
                </div>
            </section>
        );
    }
}

export default SiderLayout;