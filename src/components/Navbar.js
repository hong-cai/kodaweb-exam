import React, { Component } from 'react';
import Logo from 'Logo';
import NavMenu from 'NavMenu';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        // this.hoverRef = React.createRef();
        this.state = {
            menus:['home','about','service','our team','news','careers','contact'],
            active:false
        }
    }


    componentDidMount() {
        document.addEventListener('click', (e) => this.collapseNavHover(e))
    }



    collapseNavHover(e) {
        // console.log('this.node', this.node, 'contains', e.target, this.node.contains(e.target));
        if (this.node && this.node.contains(e.target)) {
            return;
        }
        this.closeHoverCart();
    }

    handleMouseOver = () => {
        this.setState({
            hoverCart: true
        })
    }

    closeHoverCart = () => {
        this.setState({
            hoverCart: false
        })
    }

    render() {
        return (
            <nav role="navigation" class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button data-target="#navbar-collapse-02" data-toggle="collapse" class="navbar-toggle" type="button">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>  
                </button>
<Logo />
                </div>

                <div id="navbar-collapse-02" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        {
                            this.state.menus.map=(menu,index)=>{
                                <NavMenu menu key={index} active={this.state.active}  />
                            }
                        }    
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}


