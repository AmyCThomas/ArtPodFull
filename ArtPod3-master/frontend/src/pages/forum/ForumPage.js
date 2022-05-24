import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import ArtPodAPI from "../../api/ArtPodAPI";
import ForumRender from "../../components/forum/ForumRender";
import './ForumStyles.css'

function ForumPage() {
  const item = "forums"
  // states
  const [forumLists, setForumLists] = useState([])

  // effects
  useEffect(()=>{
    loadForumLists()
  }, []) // Change once we add authentication features for admin

  const loadForumLists = async () =>{
    const data = await ArtPodAPI.getAllItems(item)
    setForumLists(data ? data : [] )
  }

  // render
  const renderForumLists = () => {
    return forumLists.map((forum) => {
      return <ForumRender key={forum.id} forum={ forum }/>
    })
  }

  return (
    <div>
      <h1 className="forum-title">Forum</h1>
      <div className="forum-item-div">
        <Row className="forum-items">
          <Col>
            <h3 className="main-title">Topic Categories:</h3>
          </Col>
        </Row>
      </div>
      { renderForumLists() }
    </div>
  )
}

export default ForumPage;