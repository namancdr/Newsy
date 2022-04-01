import loading from '../images/ajax-loader.gif'

export default function Spinner() {
    return (
        <div className="text-center my-4">
            <img src={loading} alt='Loading'/>
        </div>
    )
}
