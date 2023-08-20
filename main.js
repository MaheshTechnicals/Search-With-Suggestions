let collect = async () => {
  let request = await fetch("https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json")

  let data = await request.json()
  let alllist = await []
  alllist = data.map((each) => {
    return each.name
  })

  console.log(alllist)

}



collect()