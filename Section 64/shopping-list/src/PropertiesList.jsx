import Property from "./Property";

export default function PropertiesList({ properties }) {
    console.log(properties)
    return (
        <div style={{ display: 'flex' }}>
            {properties.map(property =>
                <Property
                    key={property.id}
                    {...property}
                />
            )}
        </div>
    )
}