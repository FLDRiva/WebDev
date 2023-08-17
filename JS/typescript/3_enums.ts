enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const memberShipReverse = Membership[2]

console.log(membership);
console.log(memberShipReverse);

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.FACEBOOK
console.log(social);
