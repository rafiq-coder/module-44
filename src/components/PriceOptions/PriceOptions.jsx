import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

const priceOptions= [
        {
          "id": 1,
          "name": "Basic",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 personal training session per month",
            "Standard shower access",
            "Complimentary water refill station",
            "Access to mobile app for tracking workouts"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "4 personal training sessions per month",
            "Access to group classes (yoga, spinning, etc.)",
            "Free guest pass once a month",
            "Priority booking for classes",
            "Access to nutrition and meal plans",
            "Discounted rate on gym merchandise"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 75,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "8 personal training sessions per month",
            "Unlimited access to group classes",
            "Free guest pass twice a month",
            "Access to the sauna and pool",
            "Monthly fitness assessment and body analysis",
            "Complimentary workout towels",
            "Exclusive access to advanced training equipment",
            "Discount on massage and recovery sessions"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 120,
          "features": [
            "24/7 gym access",
            "Locker room access with private lockers",
            "Unlimited personal training sessions",
            "Unlimited group classes with VIP booking",
            "Free guest pass anytime",
            "Access to the sauna, pool, and spa",
            "Complimentary gym merchandise",
            "Personalized fitness and nutrition coaching",
            "Access to VIP lounge with refreshments",
            "Quarterly health check-ups with in-house physician",
            "Private relaxation area with massage chairs"
          ]
        }
      ];
      


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices in the town</h2>
            <div className="grid md:grid-cols-4 gap-4">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;