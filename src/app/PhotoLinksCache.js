let PhotoLinksCacheObj = function PhotoLinksCacheObj() {
    let links = [],
        date = null;

    this.getLinks = () => links;

    this.fill = (newLinks) => {
        if (!Array.isArray(newLinks)) {
            return;
        }
        date = new Date();
        links = newLinks;
    };

    this.any = (tempLinkExpireHours) => {
        let hours = Math.abs(date - new Date()) / 36e5;
        return links.length !== 0 && hours < tempLinkExpireHours;
    };
};

module.exports = new PhotoLinksCacheObj();