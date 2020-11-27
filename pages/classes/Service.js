class Service {
    constructor(id, name, category, description, price, isHourly, location, provider, providerId) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.isHourly = isHourly;
        this.location = location;
        this.provider = provider;
        this.providerId = providerId;
    }
}

module.exports = Service