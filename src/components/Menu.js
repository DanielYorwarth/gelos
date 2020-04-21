import React from 'react'
import {Link} from 'gatsby'

class Menu extends React.Component  {
    constructor(props) {
        super(props)
        this.state = { 
            buttonState: 'close',
            menuActive: ''
        }
        // This binding is necessary to make `this` work in the callback
        this.updateImage = this.updateImage.bind(this);
    }
    updateImage() {
        this.setState({
            buttonState: this.state.buttonState === 'close' ? 'open' : 'close',
            menuActive: this.state.menuActive === '' ? 'menu-active' : ''
        })
    }
 
    render() {
        return (
            <div>
                <div onClick={this.updateImage} className="burger flex lg:hidden">
                    <div className={`stick stick-1 ${this.state.buttonState}`}></div>
                    <div className={`stick stick-2 ${this.state.buttonState}`}></div>
                    <div className={`stick stick-3 ${this.state.buttonState}`}></div>
                </div>
                <div className={`menu ${this.state.menuActive} flex flex-wrap lg:flex-col justify-center items-center lg:items-end lg:justify-end  text-white font-light shadow-xl lg:shadow-none`}>
                    <span className="text-right px-4 mb-8 order-last md:order-first text-2xl lg:text-lg">
                    T: 0207 117 2490
                    </span>
                    <div className="flex flex-col lg:flex-wrap lg:flex-row mt-4 sm:mt-0 uppercase text-2xl leading-loose lg:leading-normal lg:text-sm">
                    <Link className="px-4 text-white hover:text-yellow" to="/">
                        Home
                    </Link>
                    <Link className="px-4 text-white hover:text-yellow" to="/services">
                        Our Services
                    </Link>
                    <Link className="px-4 text-white hover:text-yellow" to="/land-wanted">
                        Land Wanted
                    </Link>
                    <Link className="px-4 text-white hover:text-yellow" to="/partners">
                        Our Partners
                    </Link>
                    <Link className="px-4 text-white hover:text-yellow" to="/our-team">
                        Our Team
                    </Link>
                    <Link className="px-4 text-white hover:text-yellow" to="/contact">
                        Contact
                    </Link>
                    </div>
                </div>
            </div>     
        )
    }
}

export default Menu;