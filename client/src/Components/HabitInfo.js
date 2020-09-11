import React from 'react';
import Calendar from 'react-calendar';
import ReactModal from 'react-modal';
import 'react-calendar/dist/Calendar.css';
 
class HabitInfo extends React.Component {
    state = {
        date: new Date(),
        isModalOpen: this.props.isModalOpen,
        dateFree: null,
        habitDates: []
    }

    // openModal = () => {
    //     this.setState({ isModalOpen: true })
    // }

    // closeModal = () => {
    //     this.setState({ isModalOpen: false })
    // }

  componentDidMount = async () => {
    const res = await fetch("http://localhost:5000/dashboard/event", {
      method: "GET",
      headers: { token: localStorage.token }
  })
  let dateCheck = []
  dateCheck = await res.json()
  this.setState({ habitDates: dateCheck })
  }
  
  onChange = date => this.setState({ date })

  onClickDay = async (value) => {
    let d = value.getDate();
    let m = value.getMonth()+1;
    let y = value.getFullYear();
    if(d<10) {
        d='0'+d;
    } 

    if(m<10) {
        m='0'+m;
    } 
    let eventDate = (y + "-" + m + "-" + d)
    console.log(y + "-" + m + "-" + d);


    // Fetch to see if event for that day
   
    for (let i = 0; i < this.state.habitDates.length; i++) {
      if (this.state.habitDates[i].habitdate.includes(eventDate)) {
        this.setState({ dateFree: false })
        console.log('date already exists') 
        break
      } else {
        this.setState({ dateFree: true })
        console.log('date doesnt exist')
        
      }
    }
    
    // fetch("http://localhost:5000/dashboard/event", options )
    // .then(r => r.json())
    // .then(data => console.log(data))
    // .catch(console.warn)
    // if event, state = checked: true


    if(this.state.dateFree === true){
        this.props.submitEvent(this.props.habit, eventDate)
         
    } else if (this.state.dateFree === false) {
        this.props.removeEvent(this.props.habit, eventDate)
        
    }
    
  }
 
  render() {
    return (
      <div>
        
        <h1>{this.props.user_name}'s {this.props.habit} Page</h1>
            <Calendar
            showWeekNumbers
            onChange={this.onChange}
            value={this.state.date}
            onClickDay = {this.onClickDay}
            />
            <button onClick={ this.props.closeModal }>Close</button>
        
      </div>
    );
  }
}

export default HabitInfo;