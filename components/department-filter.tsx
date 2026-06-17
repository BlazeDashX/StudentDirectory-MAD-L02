import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

type DepartmentFilterProps = {
    options: string[];
    selected: string;
    onSelect: (option: string) => void;
};

export default function DepartmentFilter({ options, selected, onSelect }: DepartmentFilterProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
            contentContainerStyle={styles.content}
        >
            {options.map((option) => {
                const isActive = option === selected;
                return (
                    <TouchableOpacity
                        key={option}
                        activeOpacity={0.8}
                        onPress={() => onSelect(option)}
                        style={[styles.tab, isActive && styles.tabActive]}
                        accessibilityRole="button"
                        accessibilityState={{ selected: isActive }}
                    >
                        <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{option}</Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
    },
    content: {
        flexDirection: "row",
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    tab: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: "#EEF2F6",
    },
    tabActive: {
        backgroundColor: "#2563EB",
    },
    tabText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#475569",
    },
    tabTextActive: {
        color: "#FFFFFF",
    },
});