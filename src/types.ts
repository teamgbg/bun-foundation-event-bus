/**
 * @system event-bus
 * @status handwritten
 * @edit edit directly
 *
 * Type definitions for the event bus primitive.
 */

export type EventBusEvent = { type: string };

export type EventBusPayload = EventBusEvent & { [key: string]: unknown };

export type EventBusHandler<T extends EventBusEvent = EventBusPayload> = (
	event: T,
) => void | Promise<void>;

export interface EventBusStats {
	name: string;
	listenerCount: number;
	types: string[];
}
