<h1>The Concept Of GRPC</h1>
<h2>What Is gRPC?</h2>

gRPC is a robust open-source RPC (Remote Procedure Call) framework used to build scalable and fast APIs. It allows the client and server applications to communicate transparently and develop connected systems. Many leading tech firms have adopted gRPC, such as Google, Netflix, Square, IBM, Cisco, & Dropbox. This framework relies on HTTP/2, protocol buffers, and other modern technology stacks to ensure maximum API security, performance, and scalability.

<h2>History of the gRPC</h2>

In 2015, Google developed gRPC as an extension of the RPC framework to link many microservices created with different technologies. Initially, it was closely associated with Google’s internal infrastructure, but later, it was made open-source and standardized for community use. During the first year of its release, it was leveraged by top organizations to power use cases from microservices to web, mobile, and IoT. And in 2017, it became the Cloud Native Computing Foundation (CNCF) incubation project due to its increasing popularity.

<h2>Basic gRPC Concepts</h2>
gRPC owes its development and success to the use of the leading technologies that perform better than JSON and XML and provide increased API security. Most of the gRPC advantages stem from the following concepts:

<h3>Protocol Buffers</h3>
Protocol buffers, or Protobuf, is Google’s serialization/deserialization protocol that enables the easy definition of services and auto-generation of client libraries. gRPC uses this protocol as their Interface Definition Language (IDL) and serialization toolset. Its current version is proto3, which has the latest features and is easier to use.

gRPC services and messages between clients and servers are defined in proto files. The Protobuf compiler, protoc, generates client and server code that loads the .proto file into the memory at runtime and uses the in-memory schema to serialize/deserialize the binary message. After code generation, each message is exchanged between the client and remote service.

<p align="center"><img class="center" src="https://grpc.io/img/landing-2.svg"></p>

<h3>Streaming</h3>
Streaming is another key concept of gRPC, where many processes can take place in a single request. The multiplexing capability (sending multiple responses or receiving multiple requests together over a single TCP connection) of HTTP/2 makes it possible. Here are the main types of streaming:

Server-streaming RPCs – The client sends a single request to the server and receives back a stream of data sequences. The sequence is preserved, and server messages continuously stream until there are no messages left.

Client-streaming RPCs – The client sends a stream of data sequences to the server, which then processes and returns a single response to the client. Once again, gRPC guarantees message sequencing within an independent RPC call.

Bidirectional-streaming RPCs – It is two-way streaming where both client and server sends a sequence of messages to each other. Both streams operate independently; thus, they can transmit messages in any sequence. The sequence of messages in each stream is preserved.

<h3>HTTP/2</h3>
gRPC is developed on HTTP/2, which was published in 2015 to overcome the HTTP/1.1 limitations. While it is compatible with HTTP/1.1, HTTP/2 brings many advanced capabilities, such as:

Binary Framing Layer – Unlike HTTP/1.1, HTTP/2 request/response is divided into small messages and framed in binary format, making message transmission efficient. With binary framing, the HTTP/2 protocol has made request/response multiplexing possible without blocking network resources.

Streaming – Bidirectional full-duplex streaming in which the client can request and the server can respond simultaneously.

Flow Control – Flow control mechanism is used in HTTP/2, enabling detailed control of memory used to buffer in-flight messages.

Header Compression – Everything in HTTP/2, including headers, is encoded before sending, significantly improving overall performance. Using the HPACK compression method, HTTP/2 only shares the value different from the previous HTTP header packets.

Processing – With HTTP/2, gRPC supports both synchronous and asynchronous processing, which can be used to perform different types of interaction and streaming RPCs.

All these features of HTTP/2 enable gRPC to use fewer resources, resulting in reduced response times between apps and services running in the cloud and longer battery life for a client running mobile devices.

<h3>Channels</h3>

Channels are a core concept in gRPC. The HTTP/2 streams allow many simultaneous streams on one connection; channels extend this concept by supporting multiple streams over multiple concurrent connections. They provide a way to connect to the gRPC server on a specified address and port and are used in creating a client stub.

‍

<h2>gRPC Architecture</h2>
In the following gRPC architecture diagram, we have the gRPC client and server sides. In gRPC, every client service includes a stub (auto-generated files), similar to an interface containing the current remote procedures. The gRPC client makes the local procedure call to the stub with parameters to be sent to the server. The client stub then serializes the parameters with the marshaling process using Protobuf and forwards the request to the local client-time library in the local machine.


<p align="center"><img class="center" src="https://assets.website-files.com/5ff66329429d880392f6cba2/6149d279ba7cdebc475a9621_gRPC%20Architecture.png"></p>
The OS makes a call to the remote server machine via HTTP/2 protocol. The server’s OS receives the packets and calls the server stub procedure, which decodes the received parameters and executes the respective procedure invocation using Protobuf. The server stub then sends back the encoded response to the client transport layer. The client stub gets back the result message and unpacks the returned parameters, and the execution returns to the caller.

‍
