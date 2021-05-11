import React from 'react'

export default function CurrencyRow(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;

    return (
        <div>
        <input type="number" className="input" onChange={onChangeAmount} value={amount} />
        <select value={selectedCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map((currency) => {
                return (
                    <option value={currency} key={currency}>{currency}</option>
                )
            })}
        </select>    
        </div>
    )
}
