import {progressBar, totalAmountField, currentAmountField, totalBackersField, field25List, field75List, field200List} from './variables'

export default class Stats {
    constructor(currentAmount, totalAmount, totalBackers, leftNoBackers25, leftNoBackers75, leftNoBackers200 ) {
        this.currentAmount = currentAmount
        this.totalAmount = totalAmount
        this.totalBackers = totalBackers
        this.leftNoBackers25 = leftNoBackers25
        this.leftNoBackers75 = leftNoBackers75
        this.leftNoBackers200 = leftNoBackers200
    }

    calcAmount(input = 0) {
        this.currentAmount = this.currentAmount + parseInt(input)
    }

    calcTotalBackers() {
        this.totalBackers += 1
    }

    calcLeftNoBackers25() {
        if (this.leftNoBackers25 === 0) return
        this.leftNoBackers25 = this.leftNoBackers25 - 1
    }

    calcLeftNoBackers75() {
        if (this.leftNoBackers75 === 0) return
        this.leftNoBackers75 -= 1
    }

    calcLeftNoBackers200() {
        if (this.leftNoBackers200 === 0) return
        this.leftNoBackers200 -= 1
    }


    updateUI() {
        let formattedTotalAmountField = this.totalAmount.toLocaleString('en', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

        let formattedCurrentAmountField = this.currentAmount.toLocaleString('en', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

        let formattedTotalBackersField = this.totalBackers.toLocaleString('en', { maximumFractionDigits: 0 })


        progressBar.style.width = `${this.currentAmount / this.totalAmount *100}%`

        totalAmountField.innerText = `of ${formattedTotalAmountField} backed`
        currentAmountField.innerText = `${formattedCurrentAmountField}`
        totalBackersField.innerText = formattedTotalBackersField

        field25List.forEach(field => {
            field.innerText = this.leftNoBackers25
        })
        field75List.forEach(field => {
            field.innerText = this.leftNoBackers75
        })
        field200List.forEach(field => {
            field.innerText = this.leftNoBackers200
        })
    }

}