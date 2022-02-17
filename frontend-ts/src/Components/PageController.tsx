import useSWR, { Key, Fetcher } from 'swr';
import axios from 'axios';

const fetcher = async (url:string) => await axios.get(url);

interface Url {
  index: number
}

interface ObjectPage {
  id: number,
  name: string
}
const PageController = (props:Url) => {
  const { data , error } = useSWR(`${process.env.REACT_APP_BACKEND_URL}/api/animal?page=${props.index}`, fetcher)
  const response = data?.data
  console.log(data?data.data:error)
  return response?.map(
    (item:ObjectPage) => <div key={item.id}>{item.name}</div>
  )
}
export default PageController
