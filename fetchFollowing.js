const url = 'https://api.github.com/users/puja-kumari218/following?per_page=100'

const fetchFollowers = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default fetchFollowers
