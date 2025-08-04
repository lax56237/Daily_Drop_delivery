import { useLocation, useNavigate } from 'react-router-dom';

function Delivery() {
    const location = useLocation();
    const orderSheet = location.state?.orderSheet;
    const navigate = useNavigate();

    if (!orderSheet) return <p>Loading order details...</p>;

    const { user, items } = orderSheet;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Delivery Details</h2>
            <button onClick={() => navigate('/verify')}>reached to the coustomer ? </button>

            <h3>Customer Info</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Name:</strong> {user.address?.name || 'N/A'}</p>
            <p><strong>Address:</strong></p>
            <ul>
                <li><strong>Street:</strong> {user.address?.street || 'N/A'}</li>
                <li><strong>City:</strong> {user.address?.city || 'N/A'}</li>
                <li><strong>State:</strong> {user.address?.state || 'N/A'}</li>
                <li><strong>Pincode:</strong> {user.address?.pincode || 'N/A'}</li>
                <li><strong>Landmark:</strong> {user.address?.landmark || 'N/A'}</li>
            </ul>

            <h3 style={{ marginTop: '30px' }}>Products</h3>
            {items.map((item, i) => (
                <div key={i} className="item-card" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
                    <p><strong>Item:</strong> {item.product.name}</p>
                    <img src={item.product.imageUrl} alt={item.product.name} style={{ width: '100px' }} />
                    <p><strong>Price:</strong> ₹{item.product.price}</p>

                    <h4>Seller Info</h4>
                    <p><strong>Shop:</strong> {item.seller?.shopName || 'Unknown Shop'}</p>
                    <p><strong>Phone:</strong> {item.seller?.phone || 'N/A'}</p>
                    <p><strong>Address:</strong></p>
                    <ul>
                        <li><strong>Street:</strong> {item.seller?.address || 'N/A'}</li>
                        <li><strong>City:</strong> {item.seller?.city || 'N/A'}</li>
                        <li><strong>State:</strong> {item.seller?.state || 'N/A'}</li>
                        <li><strong>Pincode:</strong> {item.seller?.pincode || 'N/A'}</li>
                        <li><strong>Landmark:</strong> {item.seller?.landmark || 'N/A'}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Delivery;
