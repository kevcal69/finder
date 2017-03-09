import React from "react";


export default class Sidebar extends React.Component {
    constructor() {
        super();
        this.name = "Kev";
    }

    render() {
        return (
            <h1>It Works {this.name}</h1>
        );
    }
}
