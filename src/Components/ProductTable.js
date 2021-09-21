import React, { Component } from "react";
import RowItem from "./RowItem";
import SearchItem from "./SearchItem";
import Static from "../Route/Static";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class ProductTable extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      filterSearch: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          productData: data,
        });
      });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      filterSearch: event.target.value,
    });
  }

  handleClick() {
    return <Route exact path="/route" component={Static} />;
  }

  render() {
    const { productData, filterSearch } = this.state;

    const filterRow = productData.filter((data) => {
      return data.name.toLowerCase().match(filterSearch) ||
        data.description.toLowerCase().match(filterSearch)
        ? data
        : null;
    });

    return (
      <div className="mt-3">
        <SearchItem handleChange={this.handleChange} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price (Rs)</th>
              <th>Left in stocks</th>
            </tr>
          </thead>
          <tbody>
            {filterRow.map((data) => {
              return (
                <RowItem
                  id={data.id}
                  name={data.name}
                  description={data.description}
                  price={data.price}
                  left={data.left}
                  handleClick={this.handleClick}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
