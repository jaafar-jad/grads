import React,{Component} from 'react';
import Card from './CardUI';
import jaf from '../assets/jaf.jpeg';
import abdul from '../assets/abdul.jpeg';
import deby from '../assets/deby.jpeg';
import harm from '../assets/harm.jpeg';
import jman from '../assets/jman.webp';
import linda from '../assets/linda.webp';
import manager from '../assets/manager.jpeg';
import presh from '../assets/presh.jpeg';

class Cards extends Component {
    render() {
        return(
           <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                <div className='col-md-4'>
                   <Card imgsrc={manager} title='Jaafar'/>
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={manager}title='Abdurazak'/>
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={manager}title='John'/>
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={manager}title='Precious'/>
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={manager}title='Joshua'/>
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={manager}title='Joshua'/>
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={deby}title='Deborah' />
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={deby}title='Harmony' />
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={deby}title='Deborah' />
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={deby}title='Deborah' />
                </div>
                <div className='col-md-4'>
                   <Card imgsrc={deby}title='Linda'/>
                </div>
                
               
                <div className='col-md-4'>
                   <Card imgsrc={deby}title='miracle'/>
                </div>
                
            </div>
           </div>

        )
    }
}
export default Cards;