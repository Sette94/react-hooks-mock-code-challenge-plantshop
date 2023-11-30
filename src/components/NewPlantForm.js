import React, { useState } from "react";

function NewPlantForm({ setPlants, plants, url }) {


  const formData = {
    "name": "",
    "image": "",
    "price": "",
  }

  const [form, setForm] = useState(formData)


  function submitHandler(e) {

    e.preventDefault()

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          ...form,
          price: parseFloat(form.price, 2)
        }
      )

    }
    ).then(res => res.json())
      .then(data => {
        setPlants([
          ...plants,
          data
        ])
        setForm(formData)
      })

  }

  function changeHandler(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={form.name} name="name" placeholder="Plant name" />
        <input type="text" onChange={changeHandler} value={form.image} name="image" placeholder="Image URL" />
        <input type="number" onChange={changeHandler} value={form.price} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
