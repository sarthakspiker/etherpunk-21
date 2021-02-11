pragma solidity >=0.4.21 <=0.7.4;

    contract RealEstateRental {
    
      // Property to be rented out on Property
      struct Property {
        //string name;
        string description;
        uint256 area; // area in sq. feet
        uint256 furnishing; //0 Non 1 Semi 2 Fully
        uint256 availableFrom;
        uint256 flatType; // 2 2BHK; 3 3BHK
        //string propertyAddress;
        //string contact;
        uint256 rent; // per day month in wei (1 ether = 10^18 wei)
        uint256 securityDeposit;
        address owner; // Owner of the property
        bool isBooked; // is property booked
        bool isActive; // is property active
      }
    
      uint256 public propertyId;
    
      // mapping of propertyId to Property object
      mapping(uint256 => Property) public properties;
    
      // Details of a particular booking
      struct Booking {
        uint256 propertyId;
        uint256 checkInDate;
        uint256 checkoutDate;
        address tenant;
      }
    
      uint256 public bookingId;
    
      // mapping of bookingId to Booking object
      mapping(uint256 => Booking) public bookings;
    
      // This event is emitted when a new property is put up for rent
      event NewProperty (
        uint256 indexed propertyId
      );
    
      // This event is emitted when a New Booking is made
      event NewBooking (
        uint256 indexed propertyId,
        uint256 indexed bookingId
      );
    
      /**
       * @dev Put up an Property property in the market
       */
      function rentOutproperty( string memory description, uint256 area, uint256 furnishing, uint256 availableFrom, uint256 flatType, uint256 rent, uint256 secutityDeposit) public {
        Property memory property = Property( description, area, furnishing, availableFrom, flatType, rent, secutityDeposit, msg.sender /* owner */, false,true);
    
        // Persist `property` object to the "permanent" storage
        properties[propertyId] = property;
    
        // emit an event to notify the clients
        emit NewProperty(propertyId++);
      }
    
      /**
       * @dev Make an Property booking
       */
      function rentProperty(uint256 _propertyId, uint256 checkInDate, uint256 checkoutDate) public payable {
        // Retrieve `property` object from the storage
        Property storage property = properties[_propertyId];
    
        // Assert that property is active
        require(
          property.isActive == true,
          "property with this ID is not active"
        );
        // Assert that property not booked
        require(
          property.isBooked == false,
          "property with this ID is not available"
        );
    
        // Check the customer has sent an amount equal to (rentPerDay * numberOfDays)
        require(
          msg.value == property.rent,
          "Sent insufficient funds"
        );
    
        // send funds to the owner of the property
        _sendFunds(property.owner, msg.value);
    
        // conditions for a booking are satisfied, so make the booking
        _createBooking(_propertyId, checkInDate, checkoutDate);
      }
    
      function _createBooking(uint256 _propertyId, uint256 checkInDate, uint256 checkoutDate) internal {
        // Create a new booking object
        bookings[bookingId] = Booking(_propertyId, checkInDate, checkoutDate, msg.sender);
    
        // Retrieve `property` object from the storage
        Property storage property = properties[_propertyId];
    
        // Mark the property booked
          property.isBooked = true;
          property.isActive = false;
    
        // Emit an event to notify clients
        emit NewBooking(_propertyId, bookingId++);
      }
    
      function _sendFunds (address beneficiary, uint256 value) internal {
        // address(uint160()) is a weird solidity quirk
        // Read more here: https://solidity.readthedocs.io/en/v0.5.10/050-breaking-changes.html?highlight=address%20payable#explicitness-requirements
        address(uint160(beneficiary)).transfer(value);
      }
    
      /**
       * @dev Take down the property from the market
       */
      function markPropertyAsInactive(uint256 _propertyId) public {
        require(
          properties[_propertyId].owner == msg.sender,
          "THIS IS NOT YOUR PROPERTY"
        );
        properties[_propertyId].isActive = false;
      }
    }   
