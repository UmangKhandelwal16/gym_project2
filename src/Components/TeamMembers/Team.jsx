import React from 'react'
import Card from 'react-bootstrap/Card';
import style from './Team.module.css'

function Team() {
  return (
    <div className={style.mainContainer}>    
        <h3 style={{textAlign: "center",color:'yellow'}}> Our Experts </h3> 
        <p style={{textAlign: "center"}}> "Your body can stand almost anything. It's your mind that you have to convince."  </p>  
    <div className={style.container}>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Emily Garcia</Card.Title>
        <Card.Text className={style.text} >
        Specialization: Functional training and corrective exercises <br/>
        Experience: 2 years
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/3763874/pexels-photo-3763874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>John Smith</Card.Title>
        <Card.Text className={style.text}>
        Specialization: Weight training<br/>
        Experience: 5 years
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6455806/pexels-photo-6455806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Sarah Johnson</Card.Title>
        <Card.Text className={style.text}>
        Specialization: Cardiovascular fitness<br/>
        Experience: 3 years
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className={style.container}>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6740296/pexels-photo-6740296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Rachel Kim</Card.Title>
        <Card.Text className={style.text}>
        Specialization: Yoga and Pilates <br/>
        Experience: 4 years
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/7991604/pexels-photo-7991604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>David Chen</Card.Title>
        <Card.Text className={style.text}>
        Specialization: High-intensity interval training (HIIT) <br/>
        Experience: 6 years
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6456294/pexels-photo-6456294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Jason Brown</Card.Title>
        <Card.Text className={style.text}>
        Specialization: Functional training and corrective exercises <br/>
        Experience: 5 years
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className={style.container}> 
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6456010/pexels-photo-6456010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Michael Lee</Card.Title>
        <Card.Text className={style.text}>
        Specialization: Sports-specific training <br/>
        Experience: 7 years
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6456292/pexels-photo-6456292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Melis Taylor</Card.Title>
        <Card.Text className={style.text}>
        Specialization: Group fitness and bootcamp-style workouts<br/>
        Experience: 7 years
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4057066/pexels-photo-4057066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Sophia Hernandez</Card.Title>
        <Card.Text className={style.text}>
        Specialization: Mind-body training and meditation <br/>
        Experience: 7 years
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className={style.container}>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6456211/pexels-photo-6456211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Alex Davis</Card.Title>
        <Card.Text className={style.text}>
        Specialization: Boxing and kickboxing <br/>
        Experience: 7 years
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className={style.item} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/4853689/pexels-photo-4853689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Jason Brown</Card.Title>
        <Card.Text className={style.text}>
        Specialization: Bodybuilding and nutrition <br/>
        Experience: 5 years
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}


export default Team