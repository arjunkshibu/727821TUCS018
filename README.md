
# Networking Concepts and OSI Model

## Network Types

### LAN (Local Area Network)
- Covers a small geographical area, like a house or small office.
- Can connect multiple devices within the area.

### MAN (Metropolitan Area Network)
- Spans across a city or a metropolitan area.

### WAN (Wide Area Network)
- Covers a large geographical area, such as countries or continents.

#### Technologies in WAN:
- **SONET (Synchronous Optical Networking)**: Carries data through optical fiber cables.
- **Frame Relay**: Connects LANs to WANs, such as the internet.

## Key Components

### Modem
- Converts digital signals to analog signals and vice versa.
- Example: Converts digital signals from a computer to analog signals for transmission and then back to digital signals at the receiving end.

### ISP (Internet Service Provider)
- Provides internet access.
- Small ISPs are connected to larger ISPs.
- **Tier-1 ISP**: Example - TATA.
- **Tier-2 ISP**: Example - Airtel.

## OSI Model

### 1. Application Layer
- **User Interface**: Provides the interface for user interaction with network services, including applications like web browsers, email clients, and file transfer programs.
- **Application Protocols**: Supports protocols like HTTP (web browsing), SMTP (email), FTP (file transfers), and DNS (domain name resolution).
- **Data Representation**: Ensures data formatting and presentation are understandable by the receiving application, involving encoding, encryption, and compression.
- **Data Exchange**: Manages the exchange of data between applications, including initiating and terminating connections and ensuring proper data transfer.

### 2. Presentation Layer
- **Data Translation**: Converts data between the application's format and the network format, ensuring proper formatting for different systems (e.g., ASCII to Unicode).
- **Data Formatting**: Handles various data types and formats such as text, images, or video.

### 3. Session Layer
- **Establishing Sessions**: Sets up, coordinates, and manages communication sessions between devices.
- **Maintaining Sessions**: Keeps the connection active and can recover and maintain the session if disrupted.
- **Synchronizing Data**: Adds checkpoints or synchronization points in data streams, allowing communication to resume from the last checkpoint if interrupted.
- **Session Termination**: Properly ends a session, ensuring all data has been successfully exchanged and resources are freed.
