class Restaurant {
  title: string
  grade: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    title: string,
    grade: string,
    description: string,
    infos: string[],
    image: string,
    id: number
  ) {
    this.title = title
    this.grade = grade
    this.description = description
    this.infos = infos
    this.image = image
    this.id = id
  }
}

export default Restaurant
