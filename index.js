const rangeEl = document.querySelector('input[type="range"]');
const pageviews = document.querySelector('.pricing-component__plan--pageviews')
const price = document.querySelector('.pricing-component__plan--cost')
const checkbox = document.querySelector('input[type="checkbox"]')

let monthly = true


function updatePageViews(rangeVal) {

    pageviews.innerHTML = `${rangeVal * 2}k pageviews`

}

function updatePrice(rangeVal) {
    const result = rangeVal * 0.32
    price.innerHTML = `<span class="pricing-component__plan--cost__plan">$${result.toFixed(2)}</span> <span>/month</span>`
}

function month_year() {
    if (monthly) {
        const res = rangeEl.value * 0.32 * 12 * 0.75
        price.innerHTML = `<span class="pricing-component__plan--cost__plan">$${res.toFixed(2)}</span> <span>/year</span>`
        monthly = false
    } else {
        const res = rangeEl.value * 0.32
        price.innerHTML = `<span class="pricing-component__plan--cost__plan">$${res.toFixed(2)}</span> <span>/month</span>`
        monthly = true
    }

}


rangeEl.addEventListener('input', function() {
    const rangeVal = this.value
    const value = ((rangeVal - this.min) / (this.max - this.min)) * 100
    this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%)`
    if (monthly) {
        updatePageViews(rangeVal)
        updatePrice(rangeVal)
    } else {
        updatePageViews(rangeVal)
        updatePrice(rangeVal * 12 * 0.75)
    }

});

checkbox.addEventListener('click', month_year)