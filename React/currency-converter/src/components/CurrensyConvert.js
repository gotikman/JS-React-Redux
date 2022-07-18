import { useState } from 'react';

const CurrencyConvert = ({ usd, eur }) => {

    const currencies = { "USD": usd, "EUR": eur, "UAH": 1.0 };

    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [firstSelect, setFirstSelect] = useState("UAH");
    const [secondSelect, setSecondSelect] = useState("USD");

    // -------------------------------------------------------
    const onChangeInput = (element) => {
        const value = element.target.value;

        if (element.target.name === "firstInput") {
            setFirstInput(value);
            onChange(value, firstSelect, secondSelect, setSecondInput)

        } else if (element.target.name === "secondInput") {
            setSecondInput(value);
            onChange(value, secondSelect, firstSelect, setFirstInput)
        }
    }
    // -------------------------------------------------------
    const onChangeSelector = (element) => {
        const value = element.target.value;

        if (element.target.name === "firstSelect") {
            setFirstSelect(value)
            onChange(firstInput, value, secondSelect, setSecondInput)

        } else if (element.target.name === 'secondSelect') {
            setSecondSelect(value)
            onChange(firstInput, firstSelect, value, setSecondInput)
        }
    }

    const onChange = (sourceInput, sourceSelector, targetSelector, setTargetInput) => {
        let sourceCurrency = currencies[sourceSelector];
        let targetCurrency = currencies[targetSelector];

        let result = convert(sourceInput, sourceCurrency, targetCurrency);

        // setTargetInput(result.toFixed(2))
        if (result === Math.round(result)) {
            setTargetInput(result);
        } else {
            setTargetInput(result.toFixed(2));
        }
    }

    const convert = (value, sourceCurrency, targetCurrency) => {
        return value / (targetCurrency / sourceCurrency);
    }
    // -------------------------------------------------------

    return (
        <div className="wrapper">

            <div className='fields'>
                <input
                    type="number"
                    id="firstInput"
                    name="firstInput"
                    placeholder="Вкажіть сумму"
                    value={firstInput}
                    onChange={(e) => onChangeInput(e)} />

                <select
                    id="element"
                    name="firstSelect"
                    value={firstSelect}
                    onChange={(e) => onChangeSelector(e)}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>

            <div className='fields'>
                <input
                    type="number"
                    id="secondInput"
                    name="secondInput"
                    placeholder="Я отримаю"
                    value={secondInput}
                    onChange={(e) => onChangeInput(e)} />

                <select
                    id="element"
                    name="secondSelect"
                    value={secondSelect}
                    onChange={(e) => onChangeSelector(e)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="UAH">UAH</option>
                </select>
            </div>

        </div>
    )
}

export default CurrencyConvert;



