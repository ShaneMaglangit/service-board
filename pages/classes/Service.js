class Service {
    constructor(id, thumbnail, title, category, description, estimatedCost, isHourly, location, provider, providerId) {
        this.id = id;
        this.thumbnail = thumbnail;
        this.title = title;
        this.category = category;
        this.description = description;
        this.estimatedCost = estimatedCost;
        this.isHourly = isHourly;
        this.location = location;
        this.provider = provider;
        this.providerId = providerId;
    }
}

module.exports = Service