import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {totalAmount: 2000}

  updateBalance = value => {
    const {totalAmount} = this.state
    if (totalAmount <= 0) {
      this.setState(`${totalAmount} Low balance`)
    } else {
      this.setState(prveState => ({totalAmount: prveState.totalAmount - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {totalAmount} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    let yourBalace = 'In Rupees'
    if (totalAmount <= 0) {
      yourBalace = 'Low Balance'
    }

    return (
      <div className="main-container">
        <div className="currency-container">
          <div className="name-container">
            <div className="profile-pic">
              <h1 className="heading">{initial}</h1>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="sixteen-fifty">
              {totalAmount} <br />
              <span className="in-rupees">{yourBalace}</span>
            </p>
          </div>
          <h1 className="withdraw">Withdraw</h1>
          <p className="sum-rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-List">
            {denominationsList.map(eachDenom => (
              <DenominationItem
                key={eachDenom.id}
                denominationDetails={eachDenom}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
