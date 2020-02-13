import React, { Component } from "react";
import "../styles/RadioSelector.css";
import "../styles/Selector.css";
// import { getPlans } from "../api/api";
class RadioSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  costPerMeal = (amount, mealPoints) => {
    const result = Math.ceil(amount / mealPoints);
    return result;
  };

  mealsValidTill = (mealPoints, days) => {
    const leftOverDays = days / 24;
    return `${mealPoints} meals, valid for ${leftOverDays} days`;
  };

  // componentDidMount() {}
  handleChanges = item => {
    this.props.setSelectedPlan();
  };

  render() {
    if (this.props.plans === null) {
      // console.log("loading");
    } else {
      // console.log(this.props.setSelectedPlan);
      // console.log(this.props.selectedPlan);
      // console.log(this.handleOptionChange);
    }

    // console.log(item);
    return (
      <div>
        {this.props.plans &&
          this.props.plans.map(item => {
            return (
              <form>
                <div
                  className="cc-selector"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <input
                      id={item.plan_id}
                      type="radio"
                      name="credit-card"
                      value={item.plan_id}
                      checked={this.props.selectedPlan.plan_id === item.plan_id}
                      // onChange={this.handleChanges(item)}
                      onChange={() => this.props.setSelectedPlan(item)}
                      // onChange={
                      //   (() => this.props.setSelectedPlan(item),
                      //   () => console.log(item))
                      // }
                    />
                    <label
                      className={`card-cc ${item.plan_id}`}
                      htmlFor={item.plan_id}
                      // htmlFor="one-card"
                    ></label>
                    <div style={{ marginLeft: "20px" }}>
                      <p className="selector-title">
                        &#x20B9;{item.cost.amount} @
                        <span className="selector-currency">
                          &nbsp;&#x20B9;
                          {this.costPerMeal(
                            item.cost.amount,
                            item.benefits.meal_points
                          )}
                          {/* 25 */}
                        </span>
                        &nbsp;per meal
                        <p className="selector-paragraph">
                          {this.mealsValidTill(
                            item.benefits.meal_points,
                            item.benefits.validity
                          )}
                          {/* 35 */}
                          <hr className="custom-line" />
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            );
          })}
      </div>
    );
  }
}

export default RadioSelector;
