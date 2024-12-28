import React from 'react'

const Chocolates = () => {

  const chocolateData = [
    {id: 1, name: "Almond Bliss Bar", price: "$9.00", description: "Milk chocolate with toasted almonds.", image: 
    "/chocolate1.jpg"},

    {id: 2, name: "Hazelnut Haven", price: "$6.00", description: "Chocolate with roasted hazelnut pieces.", image: "/chocolate2.jpg"},

    {id: 3, name: "Berry Burst ", price: "$6.50", description: "Dark chocolate infused with raspberry.", image: 
    "/chocolate3.jpg"},

    {id: 4, name: "Pistachio Perfection", price: "$7.00", description: "A luxurious blend of creamy milk chocolate and roasted pistachios, offering a delightful crunch in every bite.", image: "/chocolate4.jpg"},

    {id: 5, name: "Cookie Crumble Craze", price: "$8.00", description: "Milk chocolate with crunchy cookie bits.", image: "/chocolate5.jpg"},

    {id: 6, name: "Crunch & Munch Magic", price: "$12.00", description: "Chocolate with crisped rice, caramel chunks, and roasted nuts.", image: "/chocolate6.jpg"},
  ]
  return (
    <div>
      <div className='chocolates'>
        {chocolateData.map((chocolate) => (
          <div key={chocolate.id} className='chocolate-card'>
            <img src={chocolate.image} alt={chocolate.name}/>
            <h3>{chocolate.name}</h3>
            <p>{chocolate.description}</p>
            <div className='price'>{chocolate.price}</div>
            <button>Add To Cart</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Chocolates