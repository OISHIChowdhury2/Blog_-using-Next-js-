import React from 'react'
import styles from '../../styles/blog.module.css'
import { useRouter} from 'next/router'
const slug = () => {
     const router = useRouter()
     const {slug} = router.query;
  return <div>Title of the Page {slug}</div>
};

export default slug