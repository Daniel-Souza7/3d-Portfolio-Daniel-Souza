import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense, useRef, useEffect, useState } from "react";

// Component to handle the initial hint animation
const AnimatedRoom = ({ isMobile, onAnimationComplete }) => {
    const groupRef = useRef();
    const startTime = useRef(null);
    const hasInteracted = useRef(false);

    // Store initial values
    const initialRotationY = -Math.PI / 4; // Initial Y rotation
    const initialRotationX = 0; // Initial X rotation (pitch)

    const DELAY = 1.5; // Delay before animation starts (in seconds)

    useEffect(() => {
        hasInteracted.current = false;
    }, []);

    useFrame((state) => {
        if (hasInteracted.current || !groupRef.current) return;

        // Initialize start time on first frame
        if (startTime.current === null) {
            startTime.current = state.clock.elapsedTime;
        }

        const elapsed = state.clock.elapsedTime - startTime.current;

        // Wait for delay period
        if (elapsed < DELAY) {
            return; // Do nothing during delay
        }

        // Adjust elapsed time to account for delay
        const adjustedElapsed = elapsed - DELAY;

        // Phase 1: 0 → 1.0s - Rotate LEFT 15°
        if (adjustedElapsed < 1.0) {
            const progress = adjustedElapsed / 1.0;
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out

            const leftRotation = initialRotationY - (15 * Math.PI / 180); // -15° (left)
            groupRef.current.rotation.y = initialRotationY + (leftRotation - initialRotationY) * eased;
            groupRef.current.rotation.x = initialRotationX;
        }
        // Phase 2: 1.0 → 2.0s - Rotate RIGHT 35° (from left position)
        else if (adjustedElapsed < 2.0) {
            const progress = (adjustedElapsed - 1.0) / 1.0;
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out

            const leftRotation = initialRotationY - (15 * Math.PI / 180);
            const rightRotation = initialRotationY + (36 * Math.PI / 180); // Net +20° from initial (was -15, now +20 = 35° swing)
            groupRef.current.rotation.y = leftRotation + (rightRotation - leftRotation) * eased;
            groupRef.current.rotation.x = initialRotationX;
        }
        // Phase 3: 2.0 → 3.0s - Rotate UP 20°
        else if (adjustedElapsed < 3.0) {
            const progress = (adjustedElapsed - 2.0) / 1.0;
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out

            const rightRotation = initialRotationY + (36 * Math.PI / 180);
            const upRotation = (21 * Math.PI / 180); // Negative = rotate up

            groupRef.current.rotation.y = rightRotation;
            groupRef.current.rotation.x = initialRotationX + (upRotation - initialRotationX) * eased;
        }
        // Phase 4: 3.0 → 4.0s - Return to original
        else if (adjustedElapsed < 4.0) {
            const progress = (adjustedElapsed - 3.0) / 1.0;
            const eased = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2; // Ease in-out

            const rightRotation = initialRotationY + (36 * Math.PI / 180);
            const upRotation = (21 * Math.PI / 180);

            groupRef.current.rotation.y = rightRotation + (initialRotationY - rightRotation) * eased;
            groupRef.current.rotation.x = upRotation + (initialRotationX - upRotation) * eased;
        }
        // Phase 5: Animation complete
        else {
            groupRef.current.rotation.y = initialRotationY;
            groupRef.current.rotation.x = initialRotationX;
            hasInteracted.current = true;
            onAnimationComplete(); // Notify parent component
        }
    });

    return (
        <group
            ref={groupRef}
            scale={isMobile ? 0.7 : 1.4}
            position={[0, -4.3, 0]}
            rotation={[initialRotationX, initialRotationY, 0]}
        >
            <Room />
        </group>
    );
};

// Component to handle camera zoom animation
const CameraAnimator = () => {
    const startTime = useRef(null);
    const hasInteracted = useRef(false);

    const initialDistance = 15; // Initial camera z position
    const firstZoom = 12; // 10% closer (15 * 0.9)
    const secondZoom = 10; // Further zoom

    const DELAY = 1.5; // Delay before animation starts (in seconds)

    useEffect(() => {
        hasInteracted.current = false;
    }, []);

    useFrame((state) => {
        if (hasInteracted.current) return;

        if (startTime.current === null) {
            startTime.current = state.clock.elapsedTime;
        }

        const elapsed = state.clock.elapsedTime - startTime.current;

        // Wait for delay period
        if (elapsed < DELAY) {
            return; // Do nothing during delay
        }

        // Adjust elapsed time to account for delay
        const adjustedElapsed = elapsed - DELAY;

        // Phase 1: 0 → 1.0s - Zoom to 13.5
        if (adjustedElapsed < 1.0) {
            const progress = adjustedElapsed / 1.0;
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out

            state.camera.position.z = initialDistance + (firstZoom - initialDistance) * eased;
        }
        // Phase 2: 1.0 → 2.0s - Stay at 13.5
        else if (adjustedElapsed < 2.0) {
            state.camera.position.z = firstZoom;
        }
        // Phase 3: 2.0 → 3.0s - Zoom to 12
        else if (adjustedElapsed < 3.0) {
            const progress = (adjustedElapsed - 2.0) / 1.0;
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out

            state.camera.position.z = firstZoom + (secondZoom - firstZoom) * eased;
        }
        // Phase 4: 3.0 → 4.0s - Zoom back to original (15)
        else if (adjustedElapsed < 4.0) {
            const progress = (adjustedElapsed - 3.0) / 1.0;
            const eased = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2; // Ease in-out

            state.camera.position.z = secondZoom + (initialDistance - secondZoom) * eased;
        }
        // Phase 5: Animation complete
        else {
            state.camera.position.z = initialDistance;
            hasInteracted.current = true;
        }
    });

    return null;
};

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        // Show hint after 1.5 second delay (when animation starts)
        const timer = setTimeout(() => {
            setShowHint(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleAnimationComplete = () => {
        setShowHint(false);
    };

    return (
        <div className="relative w-full h-full">
            {/* Hint Text Overlay */}
            {showHint && (
                <div className="absolute top-30 left-1/2 -translate-x-1/2 pointer-events-none z-10">
                    <div className="text-white-50 text-sm md:text-base font-light animate-pulse">
                        Zoom in/out or drag me
                    </div>
                </div>
            )}

            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={0.2} color="#1a1a40" />

                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2}
                    enableDamping={true}
                    dampingFactor={0.05}
                />

                <Suspense fallback={null}>
                    <HeroLights />
                    <Particles count={0} />
                    <AnimatedRoom
                        isMobile={isMobile}
                        onAnimationComplete={handleAnimationComplete}
                    />
                    <CameraAnimator />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroExperience;