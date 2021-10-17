// functional componenet created using rafce
// this component is header component
// we are passing props i.e properties/ attributes to our component
// eg of props: if i have passed title attribute to the Header component in app.js we need  to pass the props as a parameter in Header function and use it
// to import different proptypes we will use : impte   
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) =>{
    const onClick=()=> {
        console.log('Click')
    } 

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/> 
        </header>
    )

}
Header.defaultProps={
    title:'Task Tracker'
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}
// the componenet is export here 
export default Header

