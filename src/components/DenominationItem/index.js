import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onWithdraw = () => {
    updateBalance(value)
  }
  return (
    <li className="button-container">
      <button className="button" type="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
